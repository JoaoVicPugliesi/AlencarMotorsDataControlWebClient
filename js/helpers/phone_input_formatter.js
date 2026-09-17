function phone_input_formatter(input) {
    input.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '');
        x = x.substring(0, 11);
        if (x.length === 0) {
            e.target.value = ''; 
            return;
        }
        if (x.length <= 2) {
            e.target.value = `(${x}`;
            return;
        } 
        if (x.length <= 6) {
            e.target.value = `(${x.slice(0, 2)}) ${x.slice(2)}`;
            return;
        } 
        if (x.length <= 10) {
            e.target.value = `(${x.slice(0, 2)}) ${x.slice(2, 6)}-${x.slice(6)}`;
            return;
        }
        e.target.value = `(${x.slice(0, 2)}) ${x.slice(2, 7)}-${x.slice(7)}`;
    });
}   

export default phone_input_formatter;