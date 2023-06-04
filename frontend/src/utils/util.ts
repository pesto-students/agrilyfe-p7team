/**
 * Returns whether the value provided is not null/undefined
 *
 * @param value
 */
const isNotNullAndUndefined = (value: any): boolean => value !== null && value !== undefined;

/**
 * Returns whether the value provided is `null` or `undefined`
 *
 * @param value
 */
const isNullOrUndefined = (value: any): boolean =>
    value == undefined || value == null;

/**
 * Returns whether the string is not empty and holds a valid string of atleast
 * one character other than tab or space.
 *
 * @param value
 */
const stringHasValue = (value: string): boolean =>
    isNotNullAndUndefined(value) && typeof value === "string" && value.trim().length > 0;

/**
 * Returns whether the string is empty or null or undefined or not.
 *
 * @param value
 */
const stringIsEmpty = (value: string): boolean =>
    isNullOrUndefined(value) || (typeof value === "string" && value.trim().length < 1);

/**
 * Returns whether the object or array is empty or not.
 *
 * @param value
 */
const isNotEmptyObjectOrArray = (value: any): boolean => {
    if (isNotNullAndUndefined(value)) {
        const string = JSON.stringify(value).trim();
        if (string !== '{}' && string !== '[]' && string !== "") {
            return true;
        }
    }

    return false;
}

/**
 * Returns when the value is an array and not empty.
 *
 * @param value
 */
const isNotEmptyArray = (value: any): boolean => {
    return isNotEmptyObjectOrArray(value) && Object.prototype.toString.call(value) === "[object Array]";
}

/**
 * Returns when the value is an object and not empty.
 *
 * @param value
 */
const isNotEmptyObject = (value: any): boolean => {
    return isNotEmptyObjectOrArray(value) && Object.prototype.toString.call(value) === "[object Object]";
}


/**
 * Returns boolean after parsing a string, number, null, undefined, NaN.
 * "TRUE", "True", "true", "1", 1 resolves `true`
 * "FALSE", "False", "false", "0", 0 resolves `false`
 * `null`, `undefined`, 'NaN'  resolves `false`
 * Any number or string other than afore mentioned resolves `false`
 * Any object or array resolves `false`
 *
 * @param value
 */
const parseBoolean = (value: any): boolean => {
    if (isNullOrUndefined(value)) {
        return false;
    }

    switch (typeof (value)) {
        case 'string':
            if (value.length > 1) {
                return value.toLowerCase() === "true";
            } else if (value.length === 1) {
                return !!+value;
            }
            break;
        case 'number':
            return !!+value;
    }

    return false;
}




/**
 * Delays the execution of next statement for specified amount of time
 *
 * @param timeOut Time to be delayed for in millisecond
 * @returns Promise
 */
const delay = (timeOut: number): Promise<void> => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve();
        }, timeOut)
    });
}

const getPayloadDetails = (parentProps: Record<string, any>, config: Record<string, any>): Record<string, any> => {
    let payload = {
        skip: 0,
        take: 10,
        userid: 36,
    };

    if (parentProps) {
        payload = {
            ...payload,
            ...parentProps,
        };
    }

    if (config) {
        payload = {
            ...payload,
            ...config,
        };
    }

    return payload;
}



export {
    delay,
    getPayloadDetails,
    isNotEmptyArray,
    isNotEmptyObject,
    isNotEmptyObjectOrArray,
    isNotNullAndUndefined,
    isNullOrUndefined,
    parseBoolean,
    stringHasValue,
    stringIsEmpty,
};
