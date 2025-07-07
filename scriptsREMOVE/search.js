import { projectArray } from "./constants.js";
const inputSearch = document.getElementById("projects_search");

Function.prototype.debounce = function (delay) {
  const func = this;
  return function (...args) {
    const context = this;
    clearTimeout(this.timeout);
    func.timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

function handleSearch(event) {
  event.preventDefault();
  const searchValue = event.target.value.toLowerCase();
  const projectsItems = document.querySelector(".projects_items");
  const searchResult = projectArray
    .filter(
      (el) =>
        el.title.toLowerCase().includes(searchValue) ||
        el.description.toLowerCase().includes(searchValue),
    )
    .map(
      (el) =>
        `<article class="projects_wrap">
            <a class="projects_link" href="#">
            <div class="projects_item">
                <div class="projects_title">
                <div class="projects_image">
                    <img src="${el.imageLink}" alt="${el.altText}" />
                </div>
                <div class="projects_info">
                    <h3>${el.title}</h3>
                </div>
                </div>
                <div class="projects_desc">
                <p>
                    ${el.description}
                </p>
                <div class="projects_versions">
                    <span class="projects_version">${el.version}</span>
                    <span class="projects_version_text">${el.moreVersion}</span>
                </div>
                </div>
            </div>
            </a>
        </article>`,
    );
  projectsItems.innerHTML = `${searchResult.length > 0 ? searchResult.join("") : "<div class='projects_no_data'>No results</div>"}`;
}

inputSearch.addEventListener("input", handleSearch.debounce(300));
