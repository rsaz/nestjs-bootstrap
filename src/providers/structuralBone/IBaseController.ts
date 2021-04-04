interface IBaseController {
    implement(dataDTO?: any): Promise<void | any>;
}

export { IBaseController };