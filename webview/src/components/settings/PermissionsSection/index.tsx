import { useTranslation } from 'react-i18next';
import styles from './style.module.less';

interface PermissionsSectionProps {
  currentProvider?: 'claude' | 'codex' | string;
  codexSandboxMode: 'workspace-write' | 'danger-full-access';
  onCodexSandboxModeChange: (mode: 'workspace-write' | 'danger-full-access') => void;
}

const PermissionsSection = ({
  currentProvider,
  codexSandboxMode,
  onCodexSandboxModeChange,
}: PermissionsSectionProps) => {
  const { t } = useTranslation();
  const isCodexMode = currentProvider === 'codex';

  return (
    <div className={styles.configSection}>
      <h3 className={styles.sectionTitle}>{t('settings.permissions')}</h3>
      <p className={styles.sectionDesc}>{t('settings.permissionsDesc')}</p>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <span className="codicon codicon-shield" />
          <span>{t('settings.permissionsPanel.codexSandboxTitle')}</span>
        </div>
        <p className={styles.panelDesc}>{t('settings.permissionsPanel.codexSandboxDesc')}</p>

        <div className={styles.options}>
          <label className={styles.option}>
            <input
              type="radio"
              name="codex-sandbox-mode"
              value="workspace-write"
              checked={codexSandboxMode === 'workspace-write'}
              onChange={() => onCodexSandboxModeChange('workspace-write')}
            />
            <div>
              <div className={styles.optionTitle}>{t('settings.permissionsPanel.workspaceWriteTitle')}</div>
              <div className={styles.optionDesc}>{t('settings.permissionsPanel.workspaceWriteDesc')}</div>
            </div>
          </label>

          <label className={styles.option}>
            <input
              type="radio"
              name="codex-sandbox-mode"
              value="danger-full-access"
              checked={codexSandboxMode === 'danger-full-access'}
              onChange={() => onCodexSandboxModeChange('danger-full-access')}
            />
            <div>
              <div className={styles.optionTitle}>{t('settings.permissionsPanel.fullAccessTitle')}</div>
              <div className={styles.optionDesc}>{t('settings.permissionsPanel.fullAccessDesc')}</div>
            </div>
          </label>
        </div>

        <small className={styles.hint}>
          <span className="codicon codicon-info" />
          <span>{t('settings.permissionsPanel.hint')}</span>
        </small>
      </div>

      {!isCodexMode && (
        <div className={styles.notice}>
          <span className="codicon codicon-lightbulb" />
          <span>{t('settings.permissionsPanel.claudeTip')}</span>
        </div>
      )}
    </div>
  );
};

export default PermissionsSection;
