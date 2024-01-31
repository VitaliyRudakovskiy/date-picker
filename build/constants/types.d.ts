export interface ICodes {
    [code: string]: string;
}
interface IFont {
    [code: string]: string | number;
}
export interface IFonts {
    fontFamily: IFont;
    fontSize: IFont;
    fontWeight: IFont;
}
export interface ITheme {
    colors: ICodes;
    fonts: IFonts;
    gaps: ICodes;
    sizes: ICodes;
}
export interface IHoliday {
    name: string;
    date: Date;
}
export {};
