
const searchList = <T extends string[]>(searhItem: string, items: Readonly<T>) => {
    const searchedItems = items.filter((item) => item.toUpperCase().includes(searhItem.toUpperCase()))
    return searchedItems;
}

export default searchList