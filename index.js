import { filter, from, map, of, take } from 'rxjs'

const myArray = [1, 2, 3, 4, 5, 6, 8, 7, 88, 66 , 55]

const numbers = from(myArray).pipe(
    take(8),
    filter(x => x % 2 === 0),
    map(x => x * 2)
)
// const numbers = of(myArray)

numbers.subscribe({
    next: res => console.log('res: ', res),
    error: err => console.error('err: ', err),
    complete: () => console.info('finish')
})