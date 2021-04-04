interface IBaseUseCase {
    execute(dataDTO: any): Promise<void | any>;
}

export { IBaseUseCase };