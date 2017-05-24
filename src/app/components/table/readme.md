**Component.html**
```html
  <ig-table [rows]="rows" [columns]="columns"></ig-table>
```
<br>
**Component.ts**
```typescript  
  @Input() rows: Array<any>
  @Input() columns: Array<{key: string, heading: string}>
```
