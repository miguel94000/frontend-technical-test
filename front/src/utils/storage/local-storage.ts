export { createLocalStorage, storage };
export type { LocalStorage };

interface LocalStorage {
    getBasePath: () => string;
    setBasePath: (basePath: string) => void;
}

const createLocalStorage = (): LocalStorage => {
    return {
        getBasePath: (): string => localStorage.getItem('basePath') || '/',
        setBasePath: (basePath: string) =>
            localStorage.setItem('basePath', basePath),
    };
};

const storage = createLocalStorage();
