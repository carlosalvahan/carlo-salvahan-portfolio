export class NavBarProps {
    navText: string;
    isActive: boolean = false;
    icon: string = '';
    link: string = '';
    textClass: string = 'white-text';

    constructor(navText: string, link: string, icon: string, textClass: string) {
        this.navText = navText;
        this.link = link;
        this.icon = icon;
        this.textClass = textClass;
    }
}