/**
 *
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *    Created by PirloLiu on 29/10/19.
 * ▬▬ι═══════ﺤ            -═══════ι▬▬
 *
 */

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

function myPromise() {
    this._status = PENDING
    this._value = undefined

    return {
        then: function (data) {

        },

    }
}

