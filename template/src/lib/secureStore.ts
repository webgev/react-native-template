import SecureKeystore, { ACCESSIBLE } from 'react-native-secure-key-store';

export { ACCESSIBLE } from 'react-native-secure-key-store';

export class SecureStore {
  private readonly accessibleType: ACCESSIBLE;

  constructor(accessibleType: ACCESSIBLE) {
    this.accessibleType = accessibleType;
  }

  public getItem = async (key: string) => {
    try {
      return await SecureKeystore.get(key);
    } catch (error) {
      return null;
    }
  };

  public setItem = async (key: string, value: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await SecureKeystore.set(key, value, { accessible: this.accessibleType });
    } catch (error) {
      throw error;
    }
  };

  public removeItem = async (key: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await SecureKeystore.remove(key);
    } catch (error) {
      throw error;
    }
  };
}

export const defaultSecureStore = new SecureStore(
  ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
);
