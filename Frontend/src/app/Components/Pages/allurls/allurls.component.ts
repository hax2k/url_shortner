import { config } from './../../../Utils/config';
import { ShortUrl } from './../../../Models/shortUrl';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Services } from 'src/app/Services/services.service';
import { Diallog } from 'src/app/Models/util-interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-allurls',
  templateUrl: './allurls.component.html',
  styleUrls: ['./allurls.component.scss']
})
export class AllurlsComponent implements OnInit {
  dataSource: MatTableDataSource<ShortUrl> = new MatTableDataSource<ShortUrl>([]);
  displayedColumns: string[] = ['id', 'url', 'shortUrl', 'click', 'created_time', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<ShortUrl>;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private $: Services) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAll() {
    this.$.apis.url.getAllShortUrl().subscribe({
      next: (x) => {
        this.dataSource.data = x;

      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      },
      complete: () => { this.table.renderRows(); }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUrl(shortUrl: ShortUrl) {
    let diallog: Diallog = {
      title: 'Confirm Action',
      message: 'Are you sure want to delete?'
    };
    this.$.model.openConfirm(diallog).subscribe(x => {
      if (x)
        this.$.apis.url.deleteShortUrl(shortUrl.id).subscribe(
          {
            next: x => {
              let index = this.dataSource.data.indexOf(shortUrl);
              this.dataSource.data.splice(index, 1);
              this.dataSource.data = this.dataSource.data.filter(i => i !== shortUrl);
              this.table.renderRows();
              this.$.snackBar.open("Deleted!", "", config);
            },
            error: (err: HttpErrorResponse) => {
              console.log(err.message);
            },
            complete: () => { this.table.renderRows(); }
          }
        );
    });
  }
}

