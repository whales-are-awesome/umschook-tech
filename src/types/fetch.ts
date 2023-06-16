interface IFetchData<T> {
    data: T | null
    pending: boolean
    error?: Error | null
}

interface IFetchDataFullyLoaded<T> extends IFetchData<T> {
    fullyLoaded: boolean
}

interface IListParams {
    offset: number
    limit: number
}

export {
    IFetchData,
    IListParams,
    IFetchDataFullyLoaded
}