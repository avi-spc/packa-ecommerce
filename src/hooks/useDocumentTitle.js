import { useEffect } from "react";

export const useDocumentTitle = (documentTitle) => {
    useEffect(() => {
        document.title = `packa · ${documentTitle}`;
    });
};
