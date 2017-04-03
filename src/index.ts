import { Observable } from 'rxjs'

var test$ = Observable.interval(1000)
test$.subscribe(x=>console.log('xyz', x))