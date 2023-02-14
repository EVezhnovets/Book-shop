﻿var dataTable;

$(document).ready(function () {
    loadDatatTable();
});

function loadDatatTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url":"/Admin/Product/GetAll"
        },
        "columns": [
            { "data": "title", "width": "15%" },
            { "data": "isbn", "width": "15%" },
            { "data": "price", "width": "15%" },
            { "data": "author", "width": "15%" },
            { "data": "category.name", "width": "15%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group" role="group">
                            <a href="Product/Upsert?id=${data}" class="btn btn-primary mx-2"> 
                                <i class="bi bi-pencil-square"></i> Edit
                            </a>
                            <a class="btn btn-danger mx-2"> 
                                <i class="bi bi-trash3"></i> Delete
                            </a>
                        </div>
                        `
                },
                "width": "15%"
            }
        ]
    });
}