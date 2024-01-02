import React, { useState, useRef, useEffect } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import { Config } from '@/components/UI';
import ConexaoModal from '@/components/modals/ConexaoModal';

function ConfigMenu() {
    const [abrirModal, setAbrirModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const abrirConexaoModal = () => {
        setAnchorEl(null);
        setAbrirModal(true);
    };

    const abrirDocs = () => {
        const url = `src/docs/index.html`;
        window.open(url, '_blank');
        setAnchorEl(null);
    };

    const abrirMenuItens = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const fecharModal = () => {
        setAnchorEl(null);
        setAbrirModal(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setAnchorEl(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="container">
            <Box className="box" gridColumn="span 12" textAlign="right" ref={menuRef}>
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
                <MenuItem onClick={abrirDocs}>
                    Docs
                </MenuItem>
            </Menu>
            <ConexaoModal abrirModal={abrirModal} fecharModal={fecharModal} />
        </div>
    );
}

export default ConfigMenu;
