function PageSplitterCheck( items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo ) {
    let splitter = new PageSplitter(items, itemsPerPage);
    let solution = [];
    solution[0] = splitter.pageCount();
    solution[1] = splitter.itemCount();
    solution[2] = splitter.pageItemCount(2);
    solution[3] = splitter.pageIndex(2);
    console.log(solution);
    return solution;
}
  // DO NOT MODIFY THE CODE ABOVE!
  
class PageSplitter {

    constructor(items, itemsPerPage) {
        this.items = items;
        this.itemsPerPage = itemsPerPage;
    }
    pageCount() {
        const pageCount = this.items.length/this.itemsPerPage;
        return pageCount
    }

    itemCount() {
        const itemCount = this.items.length;
        return itemCount
    }

    pageItemCount(page) {
        const pageCount = this.items.length/this.itemsPerPage;
        if(page !== (pageCount - 1)) {
            return this.itemsPerPage
        } else {
            return this.items.length%this.itemsPerPage
        }
    }

    pageIndex(item) {
        const valIndex = this.items.indexOf(item);
    }

}

PageSplitterCheck([1, 2, 3, 4, 5, 6], 2)