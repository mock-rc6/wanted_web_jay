export const autoResizeTextarea = (ref) => {
    ref.current.style.height = "auto";
    let height = ref.current.scrollHeight;
    ref.current.style.height = `${height + 8}px`;
};
