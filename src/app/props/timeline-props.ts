export class TimelineProps {
    iconClass: string;
    description: string;
    title: string;
    barColor: string;
    selected: boolean;


    constructor(iconClass: string, description: string, title: string, barColor: string, selected: boolean = false) {
        this.iconClass = iconClass;
        this.description = description;
        this.title = title;
        this.barColor = barColor;
        this.selected = selected;
    }
}