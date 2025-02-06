export interface UseCaseInterface<T , K> {
    run: (domain: T) => K ;

}