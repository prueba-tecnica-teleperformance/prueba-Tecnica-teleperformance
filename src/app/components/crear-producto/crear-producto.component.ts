import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  titulo = 'Crear Producto';
  productoForm: FormGroup;
  id: string | null;

  constructor (private formbuilder: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute)
  {
    this.productoForm = this.formbuilder.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void 
  {
    this.editartitulo();
  }

  agregarProducto()
  {
    const PRODUCTO: Producto = 
    {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    if(this.id !== null)
    {
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>
        {
          this.toastr.success('Se actualizo el producto con exito!', 'Producto Actualizado!');
          this.router.navigate(['/']);
        }, error =>
        {
          console.log(error);
          this.toastr.error('error inesperado contante al administrador del sistema.', 'Ha ocurrido un error.');
        })
    }
    else
    {
      this._productoService.guardarProducto(PRODUCTO).subscribe(data =>
        {
          this.toastr.success('Se registro producto con exito!', 'Producto Registrado!');
          this.router.navigate(['/']);
        }, error =>
        {
          this.toastr.error(error, 'Ha ocurrido un error.');
        })
    } 
  }

  editartitulo()
  {
    if(this.id !== null)
    {
      this.titulo = 'Editar Producto';
      this._productoService.obtenerProducto(this.id).subscribe(data =>
      {
        this.productoForm.setValue(
        {
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      }, error => 
      {
        this.toastr.error(error, 'Ha ocurrido un error.');
      })
      
    }
  }

}
