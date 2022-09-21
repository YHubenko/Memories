/**
 * Deck of cards. This class is responsible for creating and mixing cards. Contains card images list.
 */
class Deck {
    #cardsImages = ['beaming_face.png', 'crying_face.png', 'disappointed_face.png', 'drooling_face.png', 'expressionless_face.png', 'face_blowing_a_kiss.png',
        'face_holding_back_tears.png', 'face_with_head-bandage.png', 'loudly_crying_face.png', 'smiling_face.png'];

    constructor() {
        this.cards = [];
        for (const image of this.#cardsImages) {
            this.cards.push(new Card(image));
            this.cards.push(new Card(image));
        }
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        let index = this.cards.findIndex(item => item.imagePath === card.imagePath);
        if (index !== -1) {
            this.cards.splice(index, 1);
            card.disconnectFromDom();
        }
    }
}