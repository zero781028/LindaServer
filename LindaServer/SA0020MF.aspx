<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SA0020MF.aspx.cs" Inherits="LindaServer.SA0020MF" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body style="background-color:#FFFFDF">
    <form id="form1" runat="server">
        <table style="width: 100%;">
            <tr>
                <td style="text-align: right; font-size: large; font-weight: bold;">Name：</td>
                <td>
                    <asp:TextBox ID="TxtName" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td style="text-align: right; font-size: large; font-weight: bold;">Phone：</td>
                <td>
                    <input type="text" /></td>
            </tr>
            <tr>
                <td style="text-align: right; font-size: large; font-weight: bold;">Addr：</td>
                <td>
                    <input type="text" /></td>
            </tr>
        </table>
    </form>

</body>
</html>
