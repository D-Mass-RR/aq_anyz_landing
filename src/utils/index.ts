type ScrollOptions = {
  id?: string;
};
const scrollById = ({ id }: ScrollOptions): void => {
  const target = window.document.getElementById(`#${id}`);
  console.log("click", id, target);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
};

export { scrollById };
