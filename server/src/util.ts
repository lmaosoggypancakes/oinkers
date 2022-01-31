import { hash as _hash, compare as _compare } from 'bcrypt'
const SALT_ROUNDS = 10
export async function hash(password: string): Promise<string> {
    return await _hash(password, SALT_ROUNDS)
}
export async function isValid(password, password_hash): Promise<boolean> {
    return await _compare(password, password_hash)
}