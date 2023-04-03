/**
 * Show an alert with a message
 * @param {String} message  message to show
 */
export const alertMessage = ( message ) => {
    setTimeout(() => {
        alert( message );
    }, 100);
    
}