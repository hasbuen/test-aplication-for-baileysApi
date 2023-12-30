import ConexaoModal from '@/components/modals/ConexaoModal';
import { Box, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Config } from '@/components/UI';

function ConfigMenu() {
    const [abrirModal, setabrirModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const abrirConexaoModal = () => {
        setabrirModal(true);
    };

    const abrirMenuItens = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const fecharModal = () => {
        setAnchorEl(null);
        setabrirModal(false);
    };

    return (
        <>
            <div className="container">

                <Box className="box" gridColumn="span 12" textAlign="right">
                    <Config
                        aria-controls={anchorEl ? 'customized-menu' : undefined}
                        aria-haspopup="true"
                        onClick={abrirMenuItens}
                    />
                </Box>
                <Menu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                >
                    <MenuItem onClick={abrirConexaoModal}>
                        Conexões
                    </MenuItem>
                </Menu>

                <ConexaoModal abrirModal={abrirModal} fecharModal={fecharModal} />

            </div>
        </>
    );
}

export default ConfigMenu;
