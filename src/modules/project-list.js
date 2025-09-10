export class ProjectList {
    static #projectListArray = ["default"];

    static setProject(projectArray) {
        projectArray.forEach(project => {
            if (!this.#projectListArray.includes(project)) {
                this.#projectListArray.push(project);
            }
        });
    }

    static getProject() {
        return this.#projectListArray;
    }

    static deleteProject() {
        this.#projectListArray = ["default"];
    }
}
