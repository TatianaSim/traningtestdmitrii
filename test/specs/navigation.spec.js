import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before(() => {
        browser.login('eqpqtat@gmail.com', 'zaqqazx');
    });

    beforeEach(() => {
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });
});