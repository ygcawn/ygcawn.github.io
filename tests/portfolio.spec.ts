import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for(const width of [360,768,1440]){
  test(`전체 화면·상세 경로·접근성 ${width}px`,async({page})=>{
    await page.setViewportSize({width,height:900});
    const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
    for(const route of ['/','/projects/hallucination','/projects/gpt-messenger','/projects/planner','/projects/x-vscode']){
      await page.goto('/#'+route);
      await expect(page.locator('h1')).toBeVisible();
      await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
      const accessibility=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
      expect(accessibility.violations).toEqual([]);
      if(route!=='/')await expect(page.getByRole('heading',{name:'확인이 필요한 항목'})).toBeVisible();
    }
    expect(errors).toEqual([]);
  });
}
test('키보드 탐색, 상세 새로고침, 잘못된 주소',async({page})=>{
  await page.goto('/');await page.keyboard.press('Tab');
  await expect(page.getByRole('link',{name:'본문으로 건너뛰기'})).toBeFocused();
  await page.keyboard.press('Enter');await expect(page.locator('main')).toBeFocused();
  await page.locator('a[href="#/projects/hallucination"]').click();
  await expect(page.locator('main')).toBeFocused();
  await expect(page.getByRole('heading',{name:'LLM 할루시네이션 탐지 시스템',exact:true})).toBeVisible();
  await page.reload();await expect(page.getByRole('heading',{name:'직접 기여',exact:true})).toBeVisible();
  await page.goto('/#/projects/unknown');await expect(page.getByRole('heading',{name:'페이지를 찾을 수 없습니다.'})).toBeVisible();
});
