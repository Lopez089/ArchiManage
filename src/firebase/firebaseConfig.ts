import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyArMUmrGmLEyE6rMyqa2OehaKYgQcOBu1A',
  authDomain: 'archimanage.firebaseapp.com',
  projectId: 'archimanage',
  storageBucket: 'archimanage.appspot.com',
  messagingSenderId: '679933917994',
  appId: '1:679933917994:web:c0fb93675a4f7e4b41fc53'
}

const app = initializeApp(firebaseConfig, 'archiManage')
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/drive.metadata.readonly')

export { app, auth, provider }
