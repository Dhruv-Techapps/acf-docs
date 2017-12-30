class Badge {
    constructor(element) {
        this.element = element;
        this.badgeId = this.element.getAttribute("badge");
        this.count = localStorage[this.badgeId] || 0;
        this.append();
        $(this.element).on("click", () => {
            this.count++;
            this.update();
        });
    }

    append() {
        if (this.element.type === "checkbox" || this.element.type === "radio") {
            this.create().insertBefore(this.element);
        } else {
            this.create().appendTo(this.element);
        }
    }

    update() {
        this.badge.html(this.count);
        localStorage[this.badgeId] = this.count;
    }

    create() {
        return this.badge = $(`<badge>${this.count}</badge>`);
    }
}

$("[badge]").each((index, element) => {
    new Badge(element);
});

$("input[type=reset]").on("click", () => {
    localStorage.clear();
    location.reload();
})