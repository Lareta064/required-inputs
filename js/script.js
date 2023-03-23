const reqInputsForms = document.querySelectorAll('.required-inputs-form');
if(reqInputsForms.length > 0){
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    const validate = (regex, email) => {
        if(!regex instanceof RegExp)return false;

        return regex.test(String(email).toLowerCase());
    }

    for(let frm of  reqInputsForms){
        const  requiredElems = frm.querySelectorAll('.required-input');
        const frmBtn = frm.querySelector('.display-required');

        frmBtn.addEventListener('mouseenter', function(){
            requiredElems.forEach((el) => {
                if ( !el.value || 
                    (el.type === 'email' && !validate(emailRegex,el.value)) || 
                    (el.type === 'tel' && !validate(phoneRegex, el.value))) {
                        el.classList.add('required-input-novalid');
                }
            });
        });

        frmBtn.addEventListener('mouseleave', function(){
            for(let i=0; i<  requiredElems.length; i++){
                requiredElems[i].classList.remove('required-input-novalid')
            }
        });
    }

}
