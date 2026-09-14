function scroll_to_section(id) {
    const component = document.getElementById(`${id}`);
    if(component) {
        const component_top = component.getBoundingClientRect().top + window.scrollY;;
        window.scrollTo({
            top: component_top,
            behavior: 'smooth'
        });
    }
}

export default scroll_to_section;