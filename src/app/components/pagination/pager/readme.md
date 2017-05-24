**Component.html**
```html
  <ig-pager [totalItems]="page.totalResults"
              [itemsPerPage]="page.pageSize"
              (pageChanged)="onPageChange($event)"></ig-pager>
```
<br>
**Component.ts**
```typescript
  page = new Page();
  onPageChange = (pageEvent) => {
    this.page.pageNumber = pageEvent.page;
  }
```
