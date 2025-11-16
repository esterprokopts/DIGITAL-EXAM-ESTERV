export class BannerComponent {

    constructor(selector = "#officeBannerItemsCarousel") {
        this.selector = selector;
    }

    getBannerCarousel() {
        return cy.get(this.selector);
    }

    captureBannerHTML() {
        return this.getBannerCarousel()
            .should("be.visible")
            .invoke("prop", "outerHTML");
    }

    replaceBanner(htmlString) {
        cy.get(this.selector).then($old => {
            const parent = $old.parent();
            $old.remove();
            parent.append(htmlString);
        });
    }

    getFirstImage() {
        return cy.get(`${this.selector} img`).first();
    }
}
