export default class PeepModel {
    constructor(username, peepDate, peepText, _id = null) {
        this.username = username;
        this.peepDate = peepDate;
        this.peepText = peepText;
        this._id = _id;
    }
}