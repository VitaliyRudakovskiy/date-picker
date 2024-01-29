import { flexCenter } from '@constants/style/presets';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    ${flexCenter};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    ${flexCenter};
    flex-direction: column;
    position: relative;
    width: ${({ theme }) => theme.sizes.modalSize};
    padding: 40px ${({ theme }) => theme.gaps.l} 20px;
    border: 1px solid ${({ theme }) => theme.colors.chosenDay};
    border-radius: ${({ theme }) => theme.gaps.m};
    box-shadow: ${({ theme }) => theme.colors.text} 0 6px 10px -2px;
    background: ${({ theme }) => theme.colors.primary};
`;

export const CloseButton = styled.button`
    font-size: 50px;
    position: absolute;
    top: -5px;
    right: 8px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.errorText};
    }
`;

export const ModalTitle = styled.h2`
    font-size: ${({ theme }) => theme.fonts.fontSize.xxl}px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.m};
    margin-bottom: ${({ theme }) => theme.gaps.l};
`;

export const TasksContainer = styled.div`
    width: 100%;
    padding: 0 ${({ theme }) => theme.gaps.s};
    max-height: 50vh;
    overflow-y: auto;
`;
