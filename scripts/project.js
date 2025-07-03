import { projectArray } from "./constants.js"
const projectsItems = document.querySelector('.projects_items')
projectsItems.innerHTML = `${projectArray
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
          </article>`
  )
  .join('')}`
