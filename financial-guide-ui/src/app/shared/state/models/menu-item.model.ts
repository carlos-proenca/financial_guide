export class MenuItem {
    name: string;
    route: string;
    toolTip: string;
    icon: string = '';

    constructor(name: string, route: string, toolTip: string, icon: string){
      this.name = name;
      this.route = route;
      this.toolTip = toolTip;
      this.icon = icon;
    }
}
