export class TimelineProps {
    iconClass: string;
    description: string;
    title: string;
    barColor: string;


    constructor(iconClass: string, description: string, title: string, barColor: string) {
        this.iconClass = iconClass;
        this.description = description;
        this.title = title;
        this.barColor = barColor;
    }
}