<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NEWS</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="/admin_assets/plugins/fontawesome-free/css/all.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="/admin_assets/dist/css/adminlte.min.css">
    <link rel="stylesheet" href="/admin_assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="/admin_assets/assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="/admin_assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <link rel="stylesheet" href="/admin_assets/custom.css"></head>
<body class="hold-transition sidebar-mini">

<div id="admin">

</div>
<script src="{{ mix('/js/admin.js') }}"></script>

<script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
<!-- jQuery -->
<script src="/admin_assets/plugins/jquery/jquery.min.js"></script>
<!-- Bootstra/adminp 4 -->
<script src="/admin_assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE/admin App -->
<script src="/admin_assets/dist/js/adminlte.min.js"></script>
<!-- AdminLTE/admin for demo purposes -->
<script src="/admin_assets/dist/js/demo.js"></script>
<script src="/admin_assets/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="/admin_assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="/admin_assets/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="/admin_assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>

</body>
</html>
