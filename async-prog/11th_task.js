import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';
import util from 'util'

const wait = (time) => {
    const prom = new Promise((resolve) => {
        setTimeout(resolve, time)
    })
    return prom
}

wait(100).then(() => console.log('time is over!'));