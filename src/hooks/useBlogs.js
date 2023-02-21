import{useState, useEffect } from 'react';
import { projectFirestore, doc, deleteDoc} from '../firebase/config';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection("blogs")
                    .orderBy('time', 'desc')
                    .onSnapshot(snap => {
                        let documents = [];
                        snap.forEach(doc => {
                            documents.push({...doc.data(), id: doc.id});
                        });

                        const uniqueNames = [];
                        documents = documents.filter(element => {
                            const isDuplicate = uniqueNames.includes(element.name);
                            if (!isDuplicate) {
                            uniqueNames.push(element.name);
                                return true;
                            } else {
                                deleteDoc(doc(projectFirestore, 'blogs', element.id));
                            }
                            return false;
                        })
                        setBlogs(documents);
                    });
        return () => unsub(); });
    return {blogs};};
            
export default useBlogs;