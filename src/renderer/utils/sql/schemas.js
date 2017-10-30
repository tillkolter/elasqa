import { query } from '../../store/database'

export const getTableSchemas = function (callback) {
  query('SET SESSION group_concat_max_len = 1000000', function () {
    let schemaQuery = `
      SELECT
      TABLE_NAME as tableName,
      CONCAT('{', column_features, '}') as features
      FROM
      (
        SELECT
          TABLE_NAME,
          GROUP_CONCAT(column_feature) AS column_features
        FROM (
               SELECT
                 TABLE_NAME,
                 CONCAT('"', COLUMN_NAME, '": {"type": "', DATA_TYPE,
                        '", "primary": ',
                        COLUMN_KEY = 'PRI', '}') AS column_feature
    
    
               FROM information_schema.columns
               WHERE table_schema = '${process.env.DB_NAME}'
               ORDER BY table_name, ordinal_position
             ) a
        GROUP BY TABLE_NAME
      ) b
     `
    query(schemaQuery, callback)
  })
}
