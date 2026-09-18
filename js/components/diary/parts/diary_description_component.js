import diary from "../../../../data/diary.js";

function diary_description_component (description) {
    return ` 
         <textarea
            class="employees-main-painel-diary-description"
            placeholder="${diary.description}"
        >${description}</textarea>
    `
}

export default diary_description_component;