import { getDb } from "./init";
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";

class Messages {
    constructor() {
        this.db = getDb()
    }

    onSnapshot = async (callback) => {
        const q = query(collection(this.db, "messages"), orderBy("timestamp"));
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type == 'added'){
                    callback(change.doc.id, change.doc.data())
                }
            })
        });
    }

    add = async (message) => {
        await addDoc(collection(this.db, "messages"), message);
    }
}

async function messagesOnSnapshot(callback) {
    const m = new Messages()
    await m.onSnapshot(callback)
}

async function addMessage(message){
    const m = new Messages()
    await m.add(message)
}

export { messagesOnSnapshot, addMessage }