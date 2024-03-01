type ScrollOptions = {
  id?: string;
};
/** @param {id} string - HTML tag id**/
const scrollById = ({ id }: ScrollOptions): void => {
  const target = window.document.getElementById(`#${id}`);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
};

export { scrollById };
