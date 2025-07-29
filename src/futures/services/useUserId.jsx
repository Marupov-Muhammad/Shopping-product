import {jwtDecode} from 'jwt-decode'
export const useUserId = () => {
    const token = localStorage.getItem('access_token')
    if(!token){
        return null
    }
    try {
        const decoded = jwtDecode(token)
        return decoded?.sid || null
    } catch (error) {
        console.error('Invalid Token', error);
        localStorage.removeItem('access_token')
        return null
    }
}